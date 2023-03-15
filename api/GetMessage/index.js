module.exports = async function (context, req) {
  const date = "2023-03-15T19:08:10.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

