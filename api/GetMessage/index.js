module.exports = async function (context, req) {
  const date = "2024-02-07T07:08:34.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

