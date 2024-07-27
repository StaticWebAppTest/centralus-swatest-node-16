module.exports = async function (context, req) {
  const date = "2024-07-27T10:10:23.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

