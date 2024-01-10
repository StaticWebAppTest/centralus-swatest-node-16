module.exports = async function (context, req) {
  const date = "2024-01-10T17:08:43.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

