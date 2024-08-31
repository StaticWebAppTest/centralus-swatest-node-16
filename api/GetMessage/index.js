module.exports = async function (context, req) {
  const date = "2024-08-31T10:10:33.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

