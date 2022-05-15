module.exports = async function (context, req) {
  const date = "2022-05-15T16:14:46.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

