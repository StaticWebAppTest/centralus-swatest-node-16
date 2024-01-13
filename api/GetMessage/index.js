module.exports = async function (context, req) {
  const date = "2024-01-13T11:07:23.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

