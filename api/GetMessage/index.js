module.exports = async function (context, req) {
  const date = "2022-07-04T19:10:03.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

