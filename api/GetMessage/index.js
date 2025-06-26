module.exports = async function (context, req) {
  const date = "2025-06-26T09:15:17.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

