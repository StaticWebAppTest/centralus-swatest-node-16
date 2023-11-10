module.exports = async function (context, req) {
  const date = "2023-11-10T21:07:31.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

