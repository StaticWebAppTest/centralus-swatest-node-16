module.exports = async function (context, req) {
  const date = "2022-10-25T17:47:35.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

