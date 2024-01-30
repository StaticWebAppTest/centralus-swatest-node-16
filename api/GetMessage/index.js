module.exports = async function (context, req) {
  const date = "2024-01-30T08:11:22.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

