module.exports = async function (context, req) {
  const date = "2023-05-04T03:09:27.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

