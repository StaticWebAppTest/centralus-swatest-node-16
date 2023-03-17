module.exports = async function (context, req) {
  const date = "2023-03-17T23:09:09.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

