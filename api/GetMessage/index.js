module.exports = async function (context, req) {
  const date = "2022-07-25T14:11:47.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

