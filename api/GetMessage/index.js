module.exports = async function (context, req) {
  const date = "2024-02-22T01:40:15.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

