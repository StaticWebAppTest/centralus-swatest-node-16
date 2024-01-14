module.exports = async function (context, req) {
  const date = "2024-01-14T20:09:31.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

