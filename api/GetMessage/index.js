module.exports = async function (context, req) {
  const date = "2023-11-22T14:09:21.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

