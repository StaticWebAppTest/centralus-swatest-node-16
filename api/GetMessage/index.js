module.exports = async function (context, req) {
  const date = "2022-12-04T12:17:50.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

