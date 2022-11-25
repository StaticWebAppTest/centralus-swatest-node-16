module.exports = async function (context, req) {
  const date = "2022-11-25T19:07:57.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

