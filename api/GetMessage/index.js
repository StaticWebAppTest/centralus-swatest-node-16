module.exports = async function (context, req) {
  const date = "2022-03-09T08:12:19.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

