module.exports = async function (context, req) {
  const date = "2022-05-25T09:11:12.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

