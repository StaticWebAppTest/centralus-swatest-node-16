module.exports = async function (context, req) {
  const date = "2024-04-07T15:09:32.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

