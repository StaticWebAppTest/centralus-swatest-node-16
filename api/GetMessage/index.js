module.exports = async function (context, req) {
  const date = "2022-03-22T23:10:40.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

