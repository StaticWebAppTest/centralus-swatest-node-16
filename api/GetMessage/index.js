module.exports = async function (context, req) {
  const date = "2024-04-26T21:08:10.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

