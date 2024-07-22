module.exports = async function (context, req) {
  const date = "2024-07-22T19:08:25.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

