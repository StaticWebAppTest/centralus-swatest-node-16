module.exports = async function (context, req) {
  const date = "2025-02-25T05:12:20.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

