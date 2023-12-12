module.exports = async function (context, req) {
  const date = "2023-12-12T07:08:46.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

