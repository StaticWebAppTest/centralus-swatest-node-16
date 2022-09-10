module.exports = async function (context, req) {
  const date = "2022-09-10T09:11:35.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

