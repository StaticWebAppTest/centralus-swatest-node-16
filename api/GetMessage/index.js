module.exports = async function (context, req) {
  const date = "2023-05-01T21:07:47.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

