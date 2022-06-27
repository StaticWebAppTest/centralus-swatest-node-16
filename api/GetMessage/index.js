module.exports = async function (context, req) {
  const date = "2022-06-27T01:01:36.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

