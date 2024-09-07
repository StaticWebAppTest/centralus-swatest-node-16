module.exports = async function (context, req) {
  const date = "2024-09-07T21:11:42.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

