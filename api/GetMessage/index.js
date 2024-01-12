module.exports = async function (context, req) {
  const date = "2024-01-12T10:10:12.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

