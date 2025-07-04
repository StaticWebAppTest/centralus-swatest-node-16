module.exports = async function (context, req) {
  const date = "2025-07-04T22:13:15.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

