module.exports = async function (context, req) {
  const date = "2023-05-20T05:08:07.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

