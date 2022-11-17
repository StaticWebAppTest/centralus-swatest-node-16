module.exports = async function (context, req) {
  const date = "2022-11-17T19:09:02.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

