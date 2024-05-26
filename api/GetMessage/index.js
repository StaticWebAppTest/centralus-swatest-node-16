module.exports = async function (context, req) {
  const date = "2024-05-26T03:10:40.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

