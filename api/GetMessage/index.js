module.exports = async function (context, req) {
  const date = "2023-11-11T10:08:17.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

