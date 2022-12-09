module.exports = async function (context, req) {
  const date = "2022-12-09T03:12:47.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

