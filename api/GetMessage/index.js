module.exports = async function (context, req) {
  const date = "2022-04-08T11:09:33.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

