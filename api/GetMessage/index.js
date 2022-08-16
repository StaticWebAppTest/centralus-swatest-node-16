module.exports = async function (context, req) {
  const date = "2022-08-16T17:15:46.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

