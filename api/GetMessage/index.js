module.exports = async function (context, req) {
  const date = "2022-04-24T08:13:19.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

