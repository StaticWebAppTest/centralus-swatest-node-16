module.exports = async function (context, req) {
  const date = "2022-04-14T12:20:16.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

