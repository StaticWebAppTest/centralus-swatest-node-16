module.exports = async function (context, req) {
  const date = "2022-12-11T10:09:37.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

