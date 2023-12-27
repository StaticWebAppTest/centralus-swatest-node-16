module.exports = async function (context, req) {
  const date = "2023-12-27T16:11:27.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

