module.exports = async function (context, req) {
  const date = "2023-08-01T09:08:57.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

