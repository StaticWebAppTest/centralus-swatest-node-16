module.exports = async function (context, req) {
  const date = "2023-10-26T08:11:29.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

