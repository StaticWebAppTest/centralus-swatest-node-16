module.exports = async function (context, req) {
  const date = "2022-12-17T14:07:37.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

