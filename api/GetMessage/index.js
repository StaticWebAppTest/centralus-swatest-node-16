module.exports = async function (context, req) {
  const date = "2023-02-12T23:08:58.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

