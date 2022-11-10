module.exports = async function (context, req) {
  const date = "2022-11-10T08:15:20.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

