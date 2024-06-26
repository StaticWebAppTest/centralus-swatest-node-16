module.exports = async function (context, req) {
  const date = "2024-06-26T18:13:12.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

