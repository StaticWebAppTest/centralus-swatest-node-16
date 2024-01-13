module.exports = async function (context, req) {
  const date = "2024-01-13T21:07:47.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

