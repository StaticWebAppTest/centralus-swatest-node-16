module.exports = async function (context, req) {
  const date = "2024-02-25T10:08:26.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

