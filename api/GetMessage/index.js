module.exports = async function (context, req) {
  const date = "2025-03-23T21:10:28.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

