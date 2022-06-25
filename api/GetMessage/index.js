module.exports = async function (context, req) {
  const date = "2022-06-25T13:18:54.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

