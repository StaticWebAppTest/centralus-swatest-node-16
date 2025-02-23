module.exports = async function (context, req) {
  const date = "2025-02-23T16:12:33.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

