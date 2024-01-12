module.exports = async function (context, req) {
  const date = "2024-01-12T11:08:14.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

