module.exports = async function (context, req) {
  const date = "2024-01-06T13:10:43.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

