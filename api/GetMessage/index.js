module.exports = async function (context, req) {
  const date = "2022-09-11T17:17:17.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

