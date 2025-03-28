module.exports = async function (context, req) {
  const date = "2025-03-28T19:10:42.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

