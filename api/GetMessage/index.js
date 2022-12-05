module.exports = async function (context, req) {
  const date = "2022-12-05T11:07:57.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

