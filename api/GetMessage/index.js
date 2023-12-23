module.exports = async function (context, req) {
  const date = "2023-12-23T14:07:58.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

