module.exports = async function (context, req) {
  const date = "2024-01-06T05:08:36.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

