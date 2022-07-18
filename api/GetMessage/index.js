module.exports = async function (context, req) {
  const date = "2022-07-18T18:17:00.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

