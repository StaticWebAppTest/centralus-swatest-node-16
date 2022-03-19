module.exports = async function (context, req) {
  const date = "2022-03-19T11:08:43.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

