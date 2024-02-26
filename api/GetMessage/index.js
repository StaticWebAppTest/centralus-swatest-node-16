module.exports = async function (context, req) {
  const date = "2024-02-26T00:42:25.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

