module.exports = async function (context, req) {
  const date = "2022-07-30T18:12:13.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

