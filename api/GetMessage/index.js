module.exports = async function (context, req) {
  const date = "2024-04-18T10:11:39.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

