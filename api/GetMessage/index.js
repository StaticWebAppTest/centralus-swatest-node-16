module.exports = async function (context, req) {
  const date = "2023-02-17T03:16:50.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

