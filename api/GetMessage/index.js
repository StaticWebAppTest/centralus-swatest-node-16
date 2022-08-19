module.exports = async function (context, req) {
  const date = "2022-08-19T16:16:16.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

