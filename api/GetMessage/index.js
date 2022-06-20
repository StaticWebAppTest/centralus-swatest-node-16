module.exports = async function (context, req) {
  const date = "2022-06-20T20:11:19.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

