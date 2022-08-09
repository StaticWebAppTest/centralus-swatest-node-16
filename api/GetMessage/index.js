module.exports = async function (context, req) {
  const date = "2022-08-09T23:11:12.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

