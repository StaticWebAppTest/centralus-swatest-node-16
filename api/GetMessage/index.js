module.exports = async function (context, req) {
  const date = "2023-04-14T09:08:58.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

