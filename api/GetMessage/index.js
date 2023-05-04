module.exports = async function (context, req) {
  const date = "2023-05-04T00:47:22.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

