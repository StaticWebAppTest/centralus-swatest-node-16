module.exports = async function (context, req) {
  const date = "2023-01-01T10:09:18.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

