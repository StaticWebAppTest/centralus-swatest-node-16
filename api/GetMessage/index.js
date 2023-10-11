module.exports = async function (context, req) {
  const date = "2023-10-11T13:12:49.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

