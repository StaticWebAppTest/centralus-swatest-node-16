module.exports = async function (context, req) {
  const date = "2025-08-22T09:14:18.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

