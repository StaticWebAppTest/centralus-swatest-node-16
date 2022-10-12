module.exports = async function (context, req) {
  const date = "2022-10-12T22:13:04.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

