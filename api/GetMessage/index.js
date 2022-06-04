module.exports = async function (context, req) {
  const date = "2022-06-04T23:10:35.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

