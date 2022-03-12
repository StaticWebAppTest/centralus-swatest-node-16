module.exports = async function (context, req) {
  const date = "2022-03-12T22:09:46.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

