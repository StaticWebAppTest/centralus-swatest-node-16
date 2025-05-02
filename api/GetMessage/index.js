module.exports = async function (context, req) {
  const date = "2025-05-02T05:13:35.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

