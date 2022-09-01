module.exports = async function (context, req) {
  const date = "2022-09-01T23:12:20.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

