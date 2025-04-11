module.exports = async function (context, req) {
  const date = "2025-04-11T11:10:36.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

