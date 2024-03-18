module.exports = async function (context, req) {
  const date = "2024-03-18T19:07:57.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

