module.exports = async function (context, req) {
  const date = "2022-12-29T23:09:56.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

