module.exports = async function (context, req) {
  const date = "2022-07-25T03:19:05.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

