module.exports = async function (context, req) {
  const date = "2023-03-20T10:11:05.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

