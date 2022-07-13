module.exports = async function (context, req) {
  const date = "2022-07-13T20:12:02.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

