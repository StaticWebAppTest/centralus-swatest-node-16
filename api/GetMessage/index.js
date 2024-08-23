module.exports = async function (context, req) {
  const date = "2024-08-23T10:11:24.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

