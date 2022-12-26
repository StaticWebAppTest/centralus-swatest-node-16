module.exports = async function (context, req) {
  const date = "2022-12-26T09:09:33.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

