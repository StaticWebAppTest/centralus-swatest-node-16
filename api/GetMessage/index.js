module.exports = async function (context, req) {
  const date = "2023-06-07T19:07:21.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

