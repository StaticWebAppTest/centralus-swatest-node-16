module.exports = async function (context, req) {
  const date = "2023-02-23T20:10:55.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

