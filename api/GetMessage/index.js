module.exports = async function (context, req) {
  const date = "2024-01-28T09:09:14.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

