module.exports = async function (context, req) {
  const date = "2022-09-09T08:17:23.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

