module.exports = async function (context, req) {
  const date = "2022-07-23T01:00:11.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

