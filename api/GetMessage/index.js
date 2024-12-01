module.exports = async function (context, req) {
  const date = "2024-12-01T08:14:51.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

