module.exports = async function (context, req) {
  const date = "2022-05-25T03:46:09.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

