module.exports = async function (context, req) {
  const date = "2022-12-09T21:09:02.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

