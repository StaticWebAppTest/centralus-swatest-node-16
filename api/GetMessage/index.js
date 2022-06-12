module.exports = async function (context, req) {
  const date = "2022-06-12T17:09:20.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

