module.exports = async function (context, req) {
  const date = "2023-06-01T16:11:22.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

