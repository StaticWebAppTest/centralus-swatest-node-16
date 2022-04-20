module.exports = async function (context, req) {
  const date = "2022-04-20T16:15:05.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

