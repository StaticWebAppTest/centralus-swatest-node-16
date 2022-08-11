module.exports = async function (context, req) {
  const date = "2022-08-11T20:11:03.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

