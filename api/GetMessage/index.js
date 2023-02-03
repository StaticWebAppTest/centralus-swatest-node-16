module.exports = async function (context, req) {
  const date = "2023-02-03T17:08:46.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

