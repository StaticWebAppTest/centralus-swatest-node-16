module.exports = async function (context, req) {
  const date = "2022-08-16T13:25:54.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

