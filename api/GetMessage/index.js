module.exports = async function (context, req) {
  const date = "2025-03-09T13:10:45.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

