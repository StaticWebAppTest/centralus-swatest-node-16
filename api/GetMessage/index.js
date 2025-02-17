module.exports = async function (context, req) {
  const date = "2025-02-17T11:09:59.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

