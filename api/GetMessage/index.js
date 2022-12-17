module.exports = async function (context, req) {
  const date = "2022-12-17T12:15:20.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

