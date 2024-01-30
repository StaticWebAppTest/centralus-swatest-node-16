module.exports = async function (context, req) {
  const date = "2024-01-30T14:08:29.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

