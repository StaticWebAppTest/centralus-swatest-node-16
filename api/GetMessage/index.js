module.exports = async function (context, req) {
  const date = "2022-04-09T21:08:50.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

