module.exports = async function (context, req) {
  const date = "2022-07-12T01:02:36.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

