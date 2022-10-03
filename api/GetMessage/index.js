module.exports = async function (context, req) {
  const date = "2022-10-03T17:33:46.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

