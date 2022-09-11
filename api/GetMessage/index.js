module.exports = async function (context, req) {
  const date = "2022-09-11T16:15:24.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

