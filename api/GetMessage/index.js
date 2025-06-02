module.exports = async function (context, req) {
  const date = "2025-06-02T14:13:57.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

