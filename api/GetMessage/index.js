module.exports = async function (context, req) {
  const date = "2022-04-20T19:09:07.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

