module.exports = async function (context, req) {
  const date = "2023-09-07T03:09:05.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

