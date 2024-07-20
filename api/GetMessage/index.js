module.exports = async function (context, req) {
  const date = "2024-07-20T20:10:25.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

