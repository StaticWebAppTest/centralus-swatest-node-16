module.exports = async function (context, req) {
  const date = "2024-04-18T01:42:46.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

