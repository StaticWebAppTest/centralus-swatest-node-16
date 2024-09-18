module.exports = async function (context, req) {
  const date = "2024-09-18T13:18:55.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

