module.exports = async function (context, req) {
  const date = "2022-12-09T20:10:20.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

