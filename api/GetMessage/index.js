module.exports = async function (context, req) {
  const date = "2023-10-03T03:09:17.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

