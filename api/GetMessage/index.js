module.exports = async function (context, req) {
  const date = "2023-02-03T00:54:33.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

