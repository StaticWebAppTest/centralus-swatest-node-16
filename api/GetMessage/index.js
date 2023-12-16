module.exports = async function (context, req) {
  const date = "2023-12-16T17:07:35.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

