module.exports = async function (context, req) {
  const date = "2022-08-07T23:10:06.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

