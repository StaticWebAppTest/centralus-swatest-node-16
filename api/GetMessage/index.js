module.exports = async function (context, req) {
  const date = "2025-03-12T15:13:25.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

