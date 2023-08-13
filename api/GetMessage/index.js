module.exports = async function (context, req) {
  const date = "2023-08-13T04:09:35.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

