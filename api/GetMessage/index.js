module.exports = async function (context, req) {
  const date = "2022-08-26T14:09:57.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

