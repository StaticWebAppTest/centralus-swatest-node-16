module.exports = async function (context, req) {
  const date = "2025-02-27T09:13:13.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

