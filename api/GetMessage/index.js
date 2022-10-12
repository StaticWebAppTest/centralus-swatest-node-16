module.exports = async function (context, req) {
  const date = "2022-10-12T21:12:51.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

