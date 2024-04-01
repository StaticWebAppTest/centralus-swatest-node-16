module.exports = async function (context, req) {
  const date = "2024-04-01T11:09:28.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

