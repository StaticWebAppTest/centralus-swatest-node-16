module.exports = async function (context, req) {
  const date = "2024-10-14T03:20:37.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

