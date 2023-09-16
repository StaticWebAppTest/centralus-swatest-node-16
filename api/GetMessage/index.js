module.exports = async function (context, req) {
  const date = "2023-09-16T12:14:28.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

