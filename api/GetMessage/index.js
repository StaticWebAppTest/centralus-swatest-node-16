module.exports = async function (context, req) {
  const date = "2022-07-11T01:00:26.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

