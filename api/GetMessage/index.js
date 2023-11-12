module.exports = async function (context, req) {
  const date = "2023-11-12T10:08:35.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

