module.exports = async function (context, req) {
  const date = "2023-04-03T10:09:48.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

