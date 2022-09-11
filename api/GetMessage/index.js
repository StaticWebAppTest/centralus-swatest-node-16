module.exports = async function (context, req) {
  const date = "2022-09-11T23:12:00.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

