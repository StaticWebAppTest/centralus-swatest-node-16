module.exports = async function (context, req) {
  const date = "2023-03-26T19:07:04.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

