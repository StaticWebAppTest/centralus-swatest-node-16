module.exports = async function (context, req) {
  const date = "2023-05-27T12:15:23.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

