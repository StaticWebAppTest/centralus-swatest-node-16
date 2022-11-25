module.exports = async function (context, req) {
  const date = "2022-11-25T09:10:06.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

