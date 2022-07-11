module.exports = async function (context, req) {
  const date = "2022-07-11T19:09:06.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

