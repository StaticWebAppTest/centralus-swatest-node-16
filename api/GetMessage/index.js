module.exports = async function (context, req) {
  const date = "2022-04-03T11:08:50.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

