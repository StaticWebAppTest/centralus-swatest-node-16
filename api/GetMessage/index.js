module.exports = async function (context, req) {
  const date = "2025-12-28T12:27:54.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

