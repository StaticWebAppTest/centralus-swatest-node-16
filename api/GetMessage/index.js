module.exports = async function (context, req) {
  const date = "2022-12-05T14:09:15.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

