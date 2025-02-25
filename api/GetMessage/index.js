module.exports = async function (context, req) {
  const date = "2025-02-25T21:11:13.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

