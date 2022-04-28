module.exports = async function (context, req) {
  const date = "2022-04-28T09:16:17.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

