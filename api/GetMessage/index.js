module.exports = async function (context, req) {
  const date = "2022-04-10T02:27:09.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

