module.exports = async function (context, req) {
  const date = "2022-06-18T20:10:20.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

