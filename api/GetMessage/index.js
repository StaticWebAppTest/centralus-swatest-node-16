module.exports = async function (context, req) {
  const date = "2025-05-06T18:18:25.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

