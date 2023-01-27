module.exports = async function (context, req) {
  const date = "2023-01-27T10:10:11.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

