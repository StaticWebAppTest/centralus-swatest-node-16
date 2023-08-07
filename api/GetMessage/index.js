module.exports = async function (context, req) {
  const date = "2023-08-07T07:08:34.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

