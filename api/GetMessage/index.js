module.exports = async function (context, req) {
  const date = "2022-05-15T01:07:35.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

