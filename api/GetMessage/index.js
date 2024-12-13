module.exports = async function (context, req) {
  const date = "2024-12-13T13:22:30.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

