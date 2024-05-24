module.exports = async function (context, req) {
  const date = "2024-05-24T22:09:41.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

