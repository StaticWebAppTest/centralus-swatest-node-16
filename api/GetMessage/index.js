module.exports = async function (context, req) {
  const date = "2025-03-23T19:10:18.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

