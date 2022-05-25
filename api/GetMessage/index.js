module.exports = async function (context, req) {
  const date = "2022-05-25T02:56:49.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

