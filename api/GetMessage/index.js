module.exports = async function (context, req) {
  const date = "2022-12-11T17:08:04.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

