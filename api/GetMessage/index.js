module.exports = async function (context, req) {
  const date = "2023-07-11T16:12:56.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

