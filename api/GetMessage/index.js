module.exports = async function (context, req) {
  const date = "2024-03-22T19:08:27.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

