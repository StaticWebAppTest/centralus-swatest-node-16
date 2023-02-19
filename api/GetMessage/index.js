module.exports = async function (context, req) {
  const date = "2023-02-19T04:11:39.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

