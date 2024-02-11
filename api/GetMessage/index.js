module.exports = async function (context, req) {
  const date = "2024-02-11T20:09:19.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

