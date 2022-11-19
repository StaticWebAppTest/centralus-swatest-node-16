module.exports = async function (context, req) {
  const date = "2022-11-19T12:18:36.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

