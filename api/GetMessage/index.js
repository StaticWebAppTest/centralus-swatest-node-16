module.exports = async function (context, req) {
  const date = "2023-07-12T21:08:41.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

