module.exports = async function (context, req) {
  const date = "2025-01-13T11:10:28.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

