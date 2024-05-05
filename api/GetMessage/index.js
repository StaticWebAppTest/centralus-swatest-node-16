module.exports = async function (context, req) {
  const date = "2024-05-05T17:07:25.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

