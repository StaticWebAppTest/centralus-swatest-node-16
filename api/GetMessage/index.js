module.exports = async function (context, req) {
  const date = "2024-12-27T10:11:49.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

