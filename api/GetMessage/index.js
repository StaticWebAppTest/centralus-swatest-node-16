module.exports = async function (context, req) {
  const date = "2025-02-23T11:09:41.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

