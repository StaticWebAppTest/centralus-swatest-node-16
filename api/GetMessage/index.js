module.exports = async function (context, req) {
  const date = "2025-02-05T17:10:25.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

