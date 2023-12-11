module.exports = async function (context, req) {
  const date = "2023-12-11T10:10:51.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

