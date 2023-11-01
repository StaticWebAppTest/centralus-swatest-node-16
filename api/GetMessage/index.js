module.exports = async function (context, req) {
  const date = "2023-11-01T14:08:17.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

