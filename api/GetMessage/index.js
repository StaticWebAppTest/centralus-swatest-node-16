module.exports = async function (context, req) {
  const date = "2023-09-26T14:08:50.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

