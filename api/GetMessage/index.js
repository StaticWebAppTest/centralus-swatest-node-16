module.exports = async function (context, req) {
  const date = "2024-02-27T01:39:40.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

