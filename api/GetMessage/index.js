module.exports = async function (context, req) {
  const date = "2023-10-25T02:16:17.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

