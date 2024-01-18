module.exports = async function (context, req) {
  const date = "2024-01-18T17:08:46.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

