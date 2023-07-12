module.exports = async function (context, req) {
  const date = "2023-07-12T01:00:21.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

