module.exports = async function (context, req) {
  const date = "2024-07-01T21:10:12.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

