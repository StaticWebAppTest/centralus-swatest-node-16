module.exports = async function (context, req) {
  const date = "2022-11-15T14:09:47.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

