module.exports = async function (context, req) {
  const date = "2024-06-27T21:09:25.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

