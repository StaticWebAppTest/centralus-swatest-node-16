module.exports = async function (context, req) {
  const date = "2022-09-18T15:12:11.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

