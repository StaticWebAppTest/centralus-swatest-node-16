module.exports = async function (context, req) {
  const date = "2024-05-13T00:45:36.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

