module.exports = async function (context, req) {
  const date = "2023-07-12T20:10:19.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

