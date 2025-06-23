module.exports = async function (context, req) {
  const date = "2025-06-23T23:10:31.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

