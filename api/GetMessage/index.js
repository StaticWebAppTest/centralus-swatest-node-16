module.exports = async function (context, req) {
  const date = "2022-06-07T03:47:11.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

