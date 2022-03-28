module.exports = async function (context, req) {
  const date = "2022-03-28T22:10:44.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

