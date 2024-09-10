module.exports = async function (context, req) {
  const date = "2024-09-10T12:22:52.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

