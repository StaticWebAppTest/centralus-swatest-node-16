module.exports = async function (context, req) {
  const date = "2024-03-06T15:10:49.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

