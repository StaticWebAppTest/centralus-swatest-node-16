module.exports = async function (context, req) {
  const date = "2022-10-19T21:12:48.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

