module.exports = async function (context, req) {
  const date = "2022-11-28T13:21:51.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

