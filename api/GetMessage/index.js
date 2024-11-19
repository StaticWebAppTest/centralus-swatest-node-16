module.exports = async function (context, req) {
  const date = "2024-11-19T14:12:05.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

