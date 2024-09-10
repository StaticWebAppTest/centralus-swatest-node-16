module.exports = async function (context, req) {
  const date = "2024-09-10T17:09:48.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

