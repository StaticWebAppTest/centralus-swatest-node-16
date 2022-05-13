module.exports = async function (context, req) {
  const date = "2022-05-13T20:12:55.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

