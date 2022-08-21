module.exports = async function (context, req) {
  const date = "2022-08-21T01:00:12.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

