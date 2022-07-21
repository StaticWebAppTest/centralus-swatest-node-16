module.exports = async function (context, req) {
  const date = "2022-07-21T20:12:30.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

