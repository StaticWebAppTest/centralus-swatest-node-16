module.exports = async function (context, req) {
  const date = "2022-05-02T04:44:53.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

