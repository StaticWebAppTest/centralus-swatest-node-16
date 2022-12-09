module.exports = async function (context, req) {
  const date = "2022-12-09T12:17:38.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

