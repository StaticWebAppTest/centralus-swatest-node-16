module.exports = async function (context, req) {
  const date = "2025-02-23T17:10:09.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

