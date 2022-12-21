module.exports = async function (context, req) {
  const date = "2022-12-21T11:08:05.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

