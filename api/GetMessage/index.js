module.exports = async function (context, req) {
  const date = "2022-06-08T23:10:40.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

