module.exports = async function (context, req) {
  const date = "2023-05-07T07:07:43.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

