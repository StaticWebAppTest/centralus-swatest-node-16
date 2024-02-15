module.exports = async function (context, req) {
  const date = "2024-02-15T22:08:07.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

