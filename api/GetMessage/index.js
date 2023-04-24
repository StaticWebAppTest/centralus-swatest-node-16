module.exports = async function (context, req) {
  const date = "2023-04-24T07:09:01.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

