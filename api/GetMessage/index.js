module.exports = async function (context, req) {
  const date = "2025-09-21T14:10:21.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

