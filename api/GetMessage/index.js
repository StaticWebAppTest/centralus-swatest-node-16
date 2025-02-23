module.exports = async function (context, req) {
  const date = "2025-02-23T12:20:31.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

