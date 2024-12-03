module.exports = async function (context, req) {
  const date = "2024-12-03T10:14:19.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

