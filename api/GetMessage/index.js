module.exports = async function (context, req) {
  const date = "2022-12-08T04:12:05.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

