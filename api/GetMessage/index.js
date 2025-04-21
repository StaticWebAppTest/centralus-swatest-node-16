module.exports = async function (context, req) {
  const date = "2025-04-21T11:10:58.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

