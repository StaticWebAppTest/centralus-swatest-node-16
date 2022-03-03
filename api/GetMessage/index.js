module.exports = async function (context, req) {
  const date = "2022-03-03T13:20:19.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

