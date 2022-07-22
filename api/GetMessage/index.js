module.exports = async function (context, req) {
  const date = "2022-07-22T11:09:43.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

