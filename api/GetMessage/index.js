module.exports = async function (context, req) {
  const date = "2025-02-26T14:11:55.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

