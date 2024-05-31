module.exports = async function (context, req) {
  const date = "2024-05-31T02:26:24.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

