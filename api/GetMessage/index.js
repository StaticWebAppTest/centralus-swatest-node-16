module.exports = async function (context, req) {
  const date = "2024-06-04T01:55:11.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

