module.exports = async function (context, req) {
  const date = "2022-04-27T01:01:18.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

