module.exports = async function (context, req) {
  const date = "2025-02-06T05:12:20.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

