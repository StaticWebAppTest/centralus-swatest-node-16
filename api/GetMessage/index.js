module.exports = async function (context, req) {
  const date = "2022-06-22T11:08:40.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

