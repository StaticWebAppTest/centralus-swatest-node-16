module.exports = async function (context, req) {
  const date = "2025-01-04T04:13:44.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

