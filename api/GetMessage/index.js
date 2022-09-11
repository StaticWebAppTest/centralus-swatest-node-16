module.exports = async function (context, req) {
  const date = "2022-09-11T01:09:04.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

