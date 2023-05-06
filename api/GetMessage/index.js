module.exports = async function (context, req) {
  const date = "2023-05-06T12:15:20.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

