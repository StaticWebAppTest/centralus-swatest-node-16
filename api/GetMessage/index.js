module.exports = async function (context, req) {
  const date = "2022-05-07T16:13:53.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

