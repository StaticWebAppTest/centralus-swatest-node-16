module.exports = async function (context, req) {
  const date = "2024-09-12T07:11:12.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

