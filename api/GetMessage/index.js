module.exports = async function (context, req) {
  const date = "2023-08-19T12:13:49.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

