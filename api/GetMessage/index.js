module.exports = async function (context, req) {
  const date = "2024-12-17T23:11:18.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

