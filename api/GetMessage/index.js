module.exports = async function (context, req) {
  const date = "2022-09-19T01:08:08.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

