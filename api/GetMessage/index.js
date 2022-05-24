module.exports = async function (context, req) {
  const date = "2022-05-24T20:13:07.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

