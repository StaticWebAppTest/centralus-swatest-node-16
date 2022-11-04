module.exports = async function (context, req) {
  const date = "2022-11-04T03:37:56.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

