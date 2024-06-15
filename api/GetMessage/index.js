module.exports = async function (context, req) {
  const date = "2024-06-15T09:09:57.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

