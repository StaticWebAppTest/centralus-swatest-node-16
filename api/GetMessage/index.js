module.exports = async function (context, req) {
  const date = "2025-07-11T18:19:33.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

