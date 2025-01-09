module.exports = async function (context, req) {
  const date = "2025-01-09T07:11:50.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

