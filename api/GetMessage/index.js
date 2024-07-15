module.exports = async function (context, req) {
  const date = "2024-07-15T08:14:12.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

