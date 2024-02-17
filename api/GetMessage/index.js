module.exports = async function (context, req) {
  const date = "2024-02-17T10:08:31.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

