module.exports = async function (context, req) {
  const date = "2023-01-04T20:10:06.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

