module.exports = async function (context, req) {
  const date = "2024-01-16T09:09:41.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

