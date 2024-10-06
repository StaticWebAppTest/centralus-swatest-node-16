module.exports = async function (context, req) {
  const date = "2024-10-06T10:10:59.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

