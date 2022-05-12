module.exports = async function (context, req) {
  const date = "2022-05-12T18:14:46.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

