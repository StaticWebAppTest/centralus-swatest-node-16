module.exports = async function (context, req) {
  const date = "2022-12-12T04:12:20.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

