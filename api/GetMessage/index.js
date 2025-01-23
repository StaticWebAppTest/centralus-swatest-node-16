module.exports = async function (context, req) {
  const date = "2025-01-23T14:11:00.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

