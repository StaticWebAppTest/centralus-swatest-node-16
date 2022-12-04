module.exports = async function (context, req) {
  const date = "2022-12-04T21:08:34.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

