module.exports = async function (context, req) {
  const date = "2023-08-16T06:11:05.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

