module.exports = async function (context, req) {
  const date = "2023-10-26T00:40:11.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

