module.exports = async function (context, req) {
  const date = "2024-04-20T21:08:08.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

