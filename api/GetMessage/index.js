module.exports = async function (context, req) {
  const date = "2025-06-23T15:15:04.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

