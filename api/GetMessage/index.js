module.exports = async function (context, req) {
  const date = "2022-12-23T11:08:01.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

