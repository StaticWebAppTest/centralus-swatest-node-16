module.exports = async function (context, req) {
  const date = "2022-11-06T09:12:05.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

