module.exports = async function (context, req) {
  const date = "2022-07-05T06:13:58.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

