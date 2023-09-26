module.exports = async function (context, req) {
  const date = "2023-09-26T21:07:47.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

