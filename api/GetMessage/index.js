module.exports = async function (context, req) {
  const date = "2022-05-27T23:11:15.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

