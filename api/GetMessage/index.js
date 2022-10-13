module.exports = async function (context, req) {
  const date = "2022-10-13T20:14:31.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

