module.exports = async function (context, req) {
  const date = "2023-11-02T03:09:37.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

