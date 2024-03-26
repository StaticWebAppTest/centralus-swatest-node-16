module.exports = async function (context, req) {
  const date = "2024-03-26T11:08:34.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

