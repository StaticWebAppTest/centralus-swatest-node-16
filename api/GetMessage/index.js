module.exports = async function (context, req) {
  const date = "2022-03-11T22:10:32.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

