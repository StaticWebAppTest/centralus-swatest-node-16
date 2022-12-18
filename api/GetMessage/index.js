module.exports = async function (context, req) {
  const date = "2022-12-18T06:11:06.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

