module.exports = async function (context, req) {
  const date = "2022-03-05T06:11:55.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

