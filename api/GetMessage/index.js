module.exports = async function (context, req) {
  const date = "2025-08-23T09:12:21.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

