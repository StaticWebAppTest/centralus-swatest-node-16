module.exports = async function (context, req) {
  const date = "2022-04-06T15:10:44.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

