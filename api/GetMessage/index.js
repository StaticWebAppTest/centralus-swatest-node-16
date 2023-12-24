module.exports = async function (context, req) {
  const date = "2023-12-24T17:07:47.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

