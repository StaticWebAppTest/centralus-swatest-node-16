module.exports = async function (context, req) {
  const date = "2022-04-02T18:11:25.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

