module.exports = async function (context, req) {
  const date = "2023-04-28T23:08:49.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

