module.exports = async function (context, req) {
  const date = "2024-04-16T14:09:30.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

