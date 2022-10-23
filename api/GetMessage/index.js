module.exports = async function (context, req) {
  const date = "2022-10-23T13:37:24.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

