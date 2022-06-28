module.exports = async function (context, req) {
  const date = "2022-06-28T14:09:05.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

