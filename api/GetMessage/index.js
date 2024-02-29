module.exports = async function (context, req) {
  const date = "2024-02-29T12:16:35.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

