module.exports = async function (context, req) {
  const date = "2022-05-05T04:27:25.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

