module.exports = async function (context, req) {
  const date = "2024-07-01T06:16:19.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

