module.exports = async function (context, req) {
  const date = "2022-11-21T23:11:37.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

