module.exports = async function (context, req) {
  const date = "2024-07-24T01:59:53.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

