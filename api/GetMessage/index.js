module.exports = async function (context, req) {
  const date = "2022-03-18T13:16:50.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

