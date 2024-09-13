module.exports = async function (context, req) {
  const date = "2024-09-13T21:09:53.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

