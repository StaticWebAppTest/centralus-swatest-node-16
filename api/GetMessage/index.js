module.exports = async function (context, req) {
  const date = "2023-04-26T05:08:47.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

