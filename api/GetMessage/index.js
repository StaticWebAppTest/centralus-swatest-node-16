module.exports = async function (context, req) {
  const date = "2022-06-11T11:08:39.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

