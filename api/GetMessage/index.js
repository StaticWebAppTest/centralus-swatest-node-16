module.exports = async function (context, req) {
  const date = "2022-03-09T23:10:05.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

