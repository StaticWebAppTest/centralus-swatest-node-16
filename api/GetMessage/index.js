module.exports = async function (context, req) {
  const date = "2022-08-16T20:12:05.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

