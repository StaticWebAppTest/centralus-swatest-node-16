module.exports = async function (context, req) {
  const date = "2022-10-22T04:57:28.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

