module.exports = async function (context, req) {
  const date = "2023-01-09T12:18:44.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

