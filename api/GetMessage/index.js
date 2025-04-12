module.exports = async function (context, req) {
  const date = "2025-04-12T14:10:25.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

