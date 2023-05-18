module.exports = async function (context, req) {
  const date = "2023-05-18T08:11:17.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

