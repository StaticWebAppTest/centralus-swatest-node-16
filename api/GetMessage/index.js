module.exports = async function (context, req) {
  const date = "2024-07-17T10:11:27.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

