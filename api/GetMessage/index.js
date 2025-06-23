module.exports = async function (context, req) {
  const date = "2025-06-23T08:20:08.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

