module.exports = async function (context, req) {
  const date = "2023-04-21T14:08:11.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

