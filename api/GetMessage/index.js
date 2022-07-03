module.exports = async function (context, req) {
  const date = "2022-07-03T17:10:44.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

