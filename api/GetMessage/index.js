module.exports = async function (context, req) {
  const date = "2023-03-24T05:08:47.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

