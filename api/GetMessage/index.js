module.exports = async function (context, req) {
  const date = "2022-11-17T16:14:57.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

