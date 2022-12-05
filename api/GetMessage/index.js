module.exports = async function (context, req) {
  const date = "2022-12-05T16:13:08.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

