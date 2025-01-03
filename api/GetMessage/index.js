module.exports = async function (context, req) {
  const date = "2025-01-03T07:11:06.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

