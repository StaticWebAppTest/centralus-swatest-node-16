module.exports = async function (context, req) {
  const date = "2022-07-08T13:30:33.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

