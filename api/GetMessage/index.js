module.exports = async function (context, req) {
  const date = "2022-03-21T18:12:46.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

