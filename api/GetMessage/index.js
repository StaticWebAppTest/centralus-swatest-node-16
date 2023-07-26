module.exports = async function (context, req) {
  const date = "2023-07-26T13:12:10.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

