module.exports = async function (context, req) {
  const date = "2022-07-12T08:15:00.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

