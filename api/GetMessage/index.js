module.exports = async function (context, req) {
  const date = "2022-03-07T08:12:43.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

