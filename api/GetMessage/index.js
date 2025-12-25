module.exports = async function (context, req) {
  const date = "2025-12-25T16:17:56.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

