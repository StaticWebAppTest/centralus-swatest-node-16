module.exports = async function (context, req) {
  const date = "2023-11-02T10:09:27.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

