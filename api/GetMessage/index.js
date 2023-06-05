module.exports = async function (context, req) {
  const date = "2023-06-05T15:09:08.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

