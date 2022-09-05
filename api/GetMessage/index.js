module.exports = async function (context, req) {
  const date = "2022-09-05T01:16:15.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

