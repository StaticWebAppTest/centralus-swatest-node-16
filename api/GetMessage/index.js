module.exports = async function (context, req) {
  const date = "2022-10-24T22:13:27.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

