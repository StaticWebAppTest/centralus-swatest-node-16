module.exports = async function (context, req) {
  const date = "2022-10-17T22:13:05.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

