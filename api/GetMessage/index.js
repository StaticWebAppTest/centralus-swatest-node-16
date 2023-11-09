module.exports = async function (context, req) {
  const date = "2023-11-09T20:09:36.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

