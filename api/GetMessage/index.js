module.exports = async function (context, req) {
  const date = "2024-07-24T13:14:33.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

