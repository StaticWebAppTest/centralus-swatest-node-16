module.exports = async function (context, req) {
  const date = "2023-07-02T04:11:20.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

