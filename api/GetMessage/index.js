module.exports = async function (context, req) {
  const date = "2022-09-17T21:10:33.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

