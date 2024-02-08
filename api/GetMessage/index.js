module.exports = async function (context, req) {
  const date = "2024-02-08T01:40:06.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

