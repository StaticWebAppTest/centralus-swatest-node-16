module.exports = async function (context, req) {
  const date = "2023-09-21T23:08:49.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

