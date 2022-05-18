module.exports = async function (context, req) {
  const date = "2022-05-18T20:12:08.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

