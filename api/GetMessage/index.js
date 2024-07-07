module.exports = async function (context, req) {
  const date = "2024-07-07T21:10:17.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

