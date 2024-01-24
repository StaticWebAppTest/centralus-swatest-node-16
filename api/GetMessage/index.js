module.exports = async function (context, req) {
  const date = "2024-01-24T21:08:45.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

