module.exports = async function (context, req) {
  const date = "2024-12-21T19:08:08.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

