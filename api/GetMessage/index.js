module.exports = async function (context, req) {
  const date = "2023-10-01T16:09:38.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

