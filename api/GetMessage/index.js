module.exports = async function (context, req) {
  const date = "2022-11-09T15:12:04.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

