module.exports = async function (context, req) {
  const date = "2023-02-08T15:10:33.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

