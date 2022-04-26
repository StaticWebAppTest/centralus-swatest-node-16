module.exports = async function (context, req) {
  const date = "2022-04-26T09:11:37.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

