module.exports = async function (context, req) {
  const date = "2022-11-19T21:09:10.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

