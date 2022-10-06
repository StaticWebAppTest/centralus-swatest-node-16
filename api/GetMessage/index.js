module.exports = async function (context, req) {
  const date = "2022-10-06T06:21:06.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

