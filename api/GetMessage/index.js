module.exports = async function (context, req) {
  const date = "2024-06-25T22:09:24.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

