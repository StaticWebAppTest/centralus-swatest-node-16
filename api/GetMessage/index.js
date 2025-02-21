module.exports = async function (context, req) {
  const date = "2025-02-21T20:12:33.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

