module.exports = async function (context, req) {
  const date = "2023-11-05T06:11:01.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

