module.exports = async function (context, req) {
  const date = "2022-11-29T23:10:45.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

