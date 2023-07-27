module.exports = async function (context, req) {
  const date = "2023-07-27T23:08:22.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

