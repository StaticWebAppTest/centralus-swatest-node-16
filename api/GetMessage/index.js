module.exports = async function (context, req) {
  const date = "2023-04-18T03:09:35.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

