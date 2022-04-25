module.exports = async function (context, req) {
  const date = "2022-04-25T00:46:23.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

