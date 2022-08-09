module.exports = async function (context, req) {
  const date = "2022-08-09T03:38:30.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

