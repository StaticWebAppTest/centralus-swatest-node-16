module.exports = async function (context, req) {
  const date = "2022-04-19T07:10:48.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

