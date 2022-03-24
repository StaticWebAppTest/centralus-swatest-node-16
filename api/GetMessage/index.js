module.exports = async function (context, req) {
  const date = "2022-03-24T18:12:48.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

