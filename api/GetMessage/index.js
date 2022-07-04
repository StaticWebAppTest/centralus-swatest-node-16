module.exports = async function (context, req) {
  const date = "2022-07-04T13:31:36.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

