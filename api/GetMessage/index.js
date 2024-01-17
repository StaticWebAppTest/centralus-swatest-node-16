module.exports = async function (context, req) {
  const date = "2024-01-17T01:53:20.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

