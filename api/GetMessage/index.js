module.exports = async function (context, req) {
  const date = "2023-02-23T07:09:13.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

