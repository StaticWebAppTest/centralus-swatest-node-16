module.exports = async function (context, req) {
  const date = "2023-05-19T08:11:08.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

