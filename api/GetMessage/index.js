module.exports = async function (context, req) {
  const date = "2022-03-16T18:12:26.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

