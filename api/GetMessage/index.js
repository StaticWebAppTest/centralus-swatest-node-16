module.exports = async function (context, req) {
  const date = "2022-02-24T04:12:22.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

