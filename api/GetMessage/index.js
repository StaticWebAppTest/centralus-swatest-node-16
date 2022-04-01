module.exports = async function (context, req) {
  const date = "2022-04-01T04:15:40.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

