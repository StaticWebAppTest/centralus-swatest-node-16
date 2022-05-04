module.exports = async function (context, req) {
  const date = "2022-05-04T12:22:54.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

