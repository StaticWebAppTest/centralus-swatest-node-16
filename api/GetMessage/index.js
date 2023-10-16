module.exports = async function (context, req) {
  const date = "2023-10-16T18:12:08.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

