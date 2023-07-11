module.exports = async function (context, req) {
  const date = "2023-07-11T09:10:05.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

