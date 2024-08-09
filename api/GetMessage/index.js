module.exports = async function (context, req) {
  const date = "2024-08-09T08:14:16.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

