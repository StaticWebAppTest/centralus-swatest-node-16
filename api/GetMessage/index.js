module.exports = async function (context, req) {
  const date = "2024-01-11T17:08:17.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

