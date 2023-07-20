module.exports = async function (context, req) {
  const date = "2023-07-20T14:08:33.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

