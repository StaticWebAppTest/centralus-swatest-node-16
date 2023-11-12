module.exports = async function (context, req) {
  const date = "2023-11-12T21:07:06.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

