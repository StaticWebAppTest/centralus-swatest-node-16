module.exports = async function (context, req) {
  const date = "2023-05-27T10:08:21.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

