module.exports = async function (context, req) {
  const date = "2023-05-27T14:07:34.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

