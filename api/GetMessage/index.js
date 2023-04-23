module.exports = async function (context, req) {
  const date = "2023-04-23T10:08:37.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

