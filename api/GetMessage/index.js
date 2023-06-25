module.exports = async function (context, req) {
  const date = "2023-06-25T21:08:38.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

