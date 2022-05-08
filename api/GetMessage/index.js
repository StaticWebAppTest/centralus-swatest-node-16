module.exports = async function (context, req) {
  const date = "2022-05-08T13:20:40.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

