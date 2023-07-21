module.exports = async function (context, req) {
  const date = "2023-07-21T09:08:50.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

