module.exports = async function (context, req) {
  const date = "2022-04-19T12:20:28.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

