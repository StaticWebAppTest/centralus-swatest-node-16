module.exports = async function (context, req) {
  const date = "2022-04-18T08:13:20.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

