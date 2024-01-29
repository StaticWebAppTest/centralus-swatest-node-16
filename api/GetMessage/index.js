module.exports = async function (context, req) {
  const date = "2024-01-29T17:08:49.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

