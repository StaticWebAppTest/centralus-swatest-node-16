module.exports = async function (context, req) {
  const date = "2022-07-24T13:23:49.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

