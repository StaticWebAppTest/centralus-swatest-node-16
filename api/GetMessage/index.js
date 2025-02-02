module.exports = async function (context, req) {
  const date = "2025-02-02T14:09:08.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

