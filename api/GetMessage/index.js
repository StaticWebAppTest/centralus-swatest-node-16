module.exports = async function (context, req) {
  const date = "2022-06-18T09:09:11.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

