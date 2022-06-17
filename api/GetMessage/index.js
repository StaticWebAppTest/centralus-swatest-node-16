module.exports = async function (context, req) {
  const date = "2022-06-17T14:14:25.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

