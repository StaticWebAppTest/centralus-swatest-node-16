module.exports = async function (context, req) {
  const date = "2022-04-08T13:25:01.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

