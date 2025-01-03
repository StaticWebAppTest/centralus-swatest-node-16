module.exports = async function (context, req) {
  const date = "2025-01-03T04:14:19.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

