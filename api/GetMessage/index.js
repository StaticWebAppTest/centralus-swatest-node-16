module.exports = async function (context, req) {
  const date = "2022-08-29T06:02:31.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

