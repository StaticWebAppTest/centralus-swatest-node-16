module.exports = async function (context, req) {
  const date = "2022-10-20T17:33:46.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

