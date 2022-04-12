module.exports = async function (context, req) {
  const date = "2022-04-12T23:10:30.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

