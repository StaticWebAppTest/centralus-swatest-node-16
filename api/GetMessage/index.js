module.exports = async function (context, req) {
  const date = "2024-06-02T16:11:35.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

