module.exports = async function (context, req) {
  const date = "2022-09-07T11:10:32.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

