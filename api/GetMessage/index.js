module.exports = async function (context, req) {
  const date = "2022-05-20T11:11:42.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

