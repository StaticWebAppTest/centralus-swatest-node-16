module.exports = async function (context, req) {
  const date = "2024-05-26T08:11:31.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

