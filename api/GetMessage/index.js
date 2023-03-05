module.exports = async function (context, req) {
  const date = "2023-03-05T06:11:58.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

