module.exports = async function (context, req) {
  const date = "2023-05-04T20:09:02.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

