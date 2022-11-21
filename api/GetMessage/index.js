module.exports = async function (context, req) {
  const date = "2022-11-21T21:10:52.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

