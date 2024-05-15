module.exports = async function (context, req) {
  const date = "2024-05-15T21:09:22.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

