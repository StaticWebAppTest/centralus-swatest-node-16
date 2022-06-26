module.exports = async function (context, req) {
  const date = "2022-06-26T14:09:05.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

