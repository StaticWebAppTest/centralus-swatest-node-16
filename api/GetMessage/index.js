module.exports = async function (context, req) {
  const date = "2024-07-16T21:10:48.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

