module.exports = async function (context, req) {
  const date = "2023-04-24T17:08:01.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

