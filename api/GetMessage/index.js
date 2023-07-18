module.exports = async function (context, req) {
  const date = "2023-07-18T20:09:54.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

