module.exports = async function (context, req) {
  const date = "2023-05-05T06:11:48.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

