module.exports = async function (context, req) {
  const date = "2022-08-02T15:11:01.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

