module.exports = async function (context, req) {
  const date = "2023-10-18T12:17:10.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

