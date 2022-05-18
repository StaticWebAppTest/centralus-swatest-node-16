module.exports = async function (context, req) {
  const date = "2022-05-18T06:14:33.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

