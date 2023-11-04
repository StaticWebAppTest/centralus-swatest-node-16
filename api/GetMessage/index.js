module.exports = async function (context, req) {
  const date = "2023-11-04T19:06:21.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

