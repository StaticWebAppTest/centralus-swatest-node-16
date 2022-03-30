module.exports = async function (context, req) {
  const date = "2022-03-30T13:21:22.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

