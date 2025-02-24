module.exports = async function (context, req) {
  const date = "2025-02-24T09:13:47.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

