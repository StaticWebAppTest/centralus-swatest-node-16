module.exports = async function (context, req) {
  const date = "2024-01-19T17:08:49.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

