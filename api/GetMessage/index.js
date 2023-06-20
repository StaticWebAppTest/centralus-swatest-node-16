module.exports = async function (context, req) {
  const date = "2023-06-20T11:07:11.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

