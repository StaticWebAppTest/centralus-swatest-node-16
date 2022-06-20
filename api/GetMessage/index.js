module.exports = async function (context, req) {
  const date = "2022-06-20T00:58:11.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

