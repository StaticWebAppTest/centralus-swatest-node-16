module.exports = async function (context, req) {
  const date = "2025-02-28T16:15:15.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

