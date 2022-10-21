module.exports = async function (context, req) {
  const date = "2022-10-21T06:28:31.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

