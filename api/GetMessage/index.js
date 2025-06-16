module.exports = async function (context, req) {
  const date = "2025-06-16T07:15:37.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

