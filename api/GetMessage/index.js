module.exports = async function (context, req) {
  const date = "2024-12-08T15:11:30.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

