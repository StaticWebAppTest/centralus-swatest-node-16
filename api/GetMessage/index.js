module.exports = async function (context, req) {
  const date = "2023-04-17T03:09:43.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

