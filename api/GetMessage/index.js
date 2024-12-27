module.exports = async function (context, req) {
  const date = "2024-12-27T18:15:30.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

