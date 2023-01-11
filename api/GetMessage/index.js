module.exports = async function (context, req) {
  const date = "2023-01-11T12:18:42.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

