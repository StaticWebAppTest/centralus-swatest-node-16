module.exports = async function (context, req) {
  const date = "2022-06-19T20:11:17.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

