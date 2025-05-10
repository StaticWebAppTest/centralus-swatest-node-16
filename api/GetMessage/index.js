module.exports = async function (context, req) {
  const date = "2025-05-10T13:20:10.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

