module.exports = async function (context, req) {
  const date = "2024-01-26T15:09:09.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

