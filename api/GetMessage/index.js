module.exports = async function (context, req) {
  const date = "2023-01-18T17:08:39.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

