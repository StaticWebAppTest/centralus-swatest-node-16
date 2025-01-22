module.exports = async function (context, req) {
  const date = "2025-01-22T11:09:40.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

