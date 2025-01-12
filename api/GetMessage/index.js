module.exports = async function (context, req) {
  const date = "2025-01-12T23:10:33.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

