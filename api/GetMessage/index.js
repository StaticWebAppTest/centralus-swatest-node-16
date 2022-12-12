module.exports = async function (context, req) {
  const date = "2022-12-12T13:19:32.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

