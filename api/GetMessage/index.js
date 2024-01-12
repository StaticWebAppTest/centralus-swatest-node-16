module.exports = async function (context, req) {
  const date = "2024-01-12T19:07:27.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

