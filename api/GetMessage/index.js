module.exports = async function (context, req) {
  const date = "2022-06-21T14:15:21.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

