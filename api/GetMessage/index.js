module.exports = async function (context, req) {
  const date = "2022-07-21T15:12:09.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

