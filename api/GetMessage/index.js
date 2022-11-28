module.exports = async function (context, req) {
  const date = "2022-11-28T03:24:05.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

