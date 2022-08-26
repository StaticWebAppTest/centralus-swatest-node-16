module.exports = async function (context, req) {
  const date = "2022-08-26T12:23:09.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

