module.exports = async function (context, req) {
  const date = "2025-02-21T14:09:44.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

