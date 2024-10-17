module.exports = async function (context, req) {
  const date = "2024-10-17T15:11:25.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

