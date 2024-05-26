module.exports = async function (context, req) {
  const date = "2024-05-26T21:09:18.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

