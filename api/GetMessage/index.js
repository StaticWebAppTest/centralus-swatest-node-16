module.exports = async function (context, req) {
  const date = "2022-07-08T10:12:54.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

