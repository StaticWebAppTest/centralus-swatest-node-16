module.exports = async function (context, req) {
  const date = "2023-02-12T21:08:10.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

