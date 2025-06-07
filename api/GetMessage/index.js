module.exports = async function (context, req) {
  const date = "2025-06-07T15:12:30.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

