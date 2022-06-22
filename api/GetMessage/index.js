module.exports = async function (context, req) {
  const date = "2022-06-22T09:10:05.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

