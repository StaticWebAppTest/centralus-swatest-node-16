module.exports = async function (context, req) {
  const date = "2022-11-10T09:12:37.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

