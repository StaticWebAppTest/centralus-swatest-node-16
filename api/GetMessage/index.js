module.exports = async function (context, req) {
  const date = "2023-06-11T10:08:22.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

