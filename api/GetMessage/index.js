module.exports = async function (context, req) {
  const date = "2023-04-04T09:09:18.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

