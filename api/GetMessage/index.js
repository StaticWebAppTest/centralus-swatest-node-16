module.exports = async function (context, req) {
  const date = "2023-12-06T09:09:22.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

