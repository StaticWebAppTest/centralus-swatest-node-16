module.exports = async function (context, req) {
  const date = "2022-03-10T20:10:49.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

