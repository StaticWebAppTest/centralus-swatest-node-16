module.exports = async function (context, req) {
  const date = "2024-09-26T23:11:26.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

