module.exports = async function (context, req) {
  const date = "2023-06-27T07:09:32.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

