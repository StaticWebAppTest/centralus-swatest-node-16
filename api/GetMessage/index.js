module.exports = async function (context, req) {
  const date = "2022-08-09T17:14:56.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

