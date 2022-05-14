module.exports = async function (context, req) {
  const date = "2022-05-14T01:05:36.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

