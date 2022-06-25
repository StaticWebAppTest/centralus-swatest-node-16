module.exports = async function (context, req) {
  const date = "2022-06-25T12:16:44.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

