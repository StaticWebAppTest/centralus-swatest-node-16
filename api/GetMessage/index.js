module.exports = async function (context, req) {
  const date = "2022-12-05T17:09:00.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

