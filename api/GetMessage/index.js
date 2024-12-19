module.exports = async function (context, req) {
  const date = "2024-12-19T12:23:56.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

