module.exports = async function (context, req) {
  const date = "2022-05-09T21:10:25.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

