module.exports = async function (context, req) {
  const date = "2024-05-26T17:08:50.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

