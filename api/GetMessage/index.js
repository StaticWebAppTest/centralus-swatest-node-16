module.exports = async function (context, req) {
  const date = "2024-04-25T03:10:24.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

