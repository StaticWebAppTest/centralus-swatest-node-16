module.exports = async function (context, req) {
  const date = "2023-08-25T06:11:05.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

