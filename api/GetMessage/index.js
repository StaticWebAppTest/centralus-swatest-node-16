module.exports = async function (context, req) {
  const date = "2024-04-30T19:07:25.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

