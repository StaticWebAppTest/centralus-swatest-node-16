module.exports = async function (context, req) {
  const date = "2023-11-28T01:52:46.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

