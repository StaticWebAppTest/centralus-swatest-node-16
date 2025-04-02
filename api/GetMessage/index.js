module.exports = async function (context, req) {
  const date = "2025-04-02T16:16:24.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

