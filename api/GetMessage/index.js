module.exports = async function (context, req) {
  const date = "2023-02-07T20:10:20.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

