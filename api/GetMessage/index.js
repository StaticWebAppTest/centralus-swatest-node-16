module.exports = async function (context, req) {
  const date = "2023-12-11T12:18:12.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

