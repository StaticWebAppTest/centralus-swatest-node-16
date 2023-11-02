module.exports = async function (context, req) {
  const date = "2023-11-02T04:10:31.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

