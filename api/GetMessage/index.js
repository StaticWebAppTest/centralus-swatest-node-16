module.exports = async function (context, req) {
  const date = "2022-05-04T23:11:10.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

