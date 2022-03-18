module.exports = async function (context, req) {
  const date = "2022-03-18T22:10:20.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

