module.exports = async function (context, req) {
  const date = "2023-09-03T14:06:42.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

