module.exports = async function (context, req) {
  const date = "2022-12-22T11:08:08.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

