module.exports = async function (context, req) {
  const date = "2022-12-28T16:12:09.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

