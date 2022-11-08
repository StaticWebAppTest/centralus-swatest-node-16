module.exports = async function (context, req) {
  const date = "2022-11-08T23:11:54.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

