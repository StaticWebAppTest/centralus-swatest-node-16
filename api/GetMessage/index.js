module.exports = async function (context, req) {
  const date = "2024-01-10T12:17:27.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

