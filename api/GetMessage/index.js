module.exports = async function (context, req) {
  const date = "2024-02-27T00:40:43.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

