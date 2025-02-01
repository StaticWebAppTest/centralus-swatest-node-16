module.exports = async function (context, req) {
  const date = "2025-02-01T09:11:32.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

