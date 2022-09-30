module.exports = async function (context, req) {
  const date = "2022-09-30T18:19:05.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

