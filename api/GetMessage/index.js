module.exports = async function (context, req) {
  const date = "2022-10-21T21:12:05.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

