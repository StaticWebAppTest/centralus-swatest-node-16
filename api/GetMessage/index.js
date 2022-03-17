module.exports = async function (context, req) {
  const date = "2022-03-17T07:10:08.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

