module.exports = async function (context, req) {
  const date = "2023-05-23T21:07:43.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

