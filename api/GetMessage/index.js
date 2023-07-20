module.exports = async function (context, req) {
  const date = "2023-07-20T06:12:05.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

