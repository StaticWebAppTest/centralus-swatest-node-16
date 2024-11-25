module.exports = async function (context, req) {
  const date = "2024-11-25T04:15:28.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

