module.exports = async function (context, req) {
  const date = "2024-01-31T11:07:20.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

