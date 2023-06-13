module.exports = async function (context, req) {
  const date = "2023-06-13T03:09:52.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

