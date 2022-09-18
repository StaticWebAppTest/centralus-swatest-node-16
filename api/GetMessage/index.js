module.exports = async function (context, req) {
  const date = "2022-09-18T22:11:30.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

