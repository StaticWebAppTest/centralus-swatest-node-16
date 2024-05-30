module.exports = async function (context, req) {
  const date = "2024-05-30T10:10:59.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

