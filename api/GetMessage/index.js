module.exports = async function (context, req) {
  const date = "2022-10-22T17:22:44.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

