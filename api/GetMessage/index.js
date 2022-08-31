module.exports = async function (context, req) {
  const date = "2022-08-31T07:32:10.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

