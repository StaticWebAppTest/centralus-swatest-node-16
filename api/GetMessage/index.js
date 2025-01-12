module.exports = async function (context, req) {
  const date = "2025-01-12T04:14:07.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

