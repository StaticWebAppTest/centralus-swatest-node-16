module.exports = async function (context, req) {
  const date = "2022-05-17T22:12:01.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

