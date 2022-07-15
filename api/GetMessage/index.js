module.exports = async function (context, req) {
  const date = "2022-07-15T05:38:59.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

