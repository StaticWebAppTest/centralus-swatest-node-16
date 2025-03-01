module.exports = async function (context, req) {
  const date = "2025-03-01T15:11:10.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

