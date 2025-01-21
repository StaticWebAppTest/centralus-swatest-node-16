module.exports = async function (context, req) {
  const date = "2025-01-21T20:12:42.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

