module.exports = async function (context, req) {
  const date = "2025-03-10T14:12:52.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

