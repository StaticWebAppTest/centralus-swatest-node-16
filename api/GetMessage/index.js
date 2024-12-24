module.exports = async function (context, req) {
  const date = "2024-12-24T11:09:49.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

