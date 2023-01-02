module.exports = async function (context, req) {
  const date = "2023-01-02T14:08:34.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

