module.exports = async function (context, req) {
  const date = "2025-01-11T17:09:40.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

