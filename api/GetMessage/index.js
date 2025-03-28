module.exports = async function (context, req) {
  const date = "2025-03-28T16:15:40.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

