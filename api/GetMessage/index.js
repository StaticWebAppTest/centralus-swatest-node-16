module.exports = async function (context, req) {
  const date = "2024-02-29T21:10:30.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

