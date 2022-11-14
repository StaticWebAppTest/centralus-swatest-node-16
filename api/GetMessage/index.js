module.exports = async function (context, req) {
  const date = "2022-11-14T12:26:32.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

