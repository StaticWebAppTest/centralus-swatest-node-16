module.exports = async function (context, req) {
  const date = "2024-01-30T00:41:30.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

