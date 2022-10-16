module.exports = async function (context, req) {
  const date = "2022-10-16T21:11:17.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

