module.exports = async function (context, req) {
  const date = "2023-04-26T21:07:54.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

