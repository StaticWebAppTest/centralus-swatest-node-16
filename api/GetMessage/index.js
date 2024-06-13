module.exports = async function (context, req) {
  const date = "2024-06-13T17:09:48.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

