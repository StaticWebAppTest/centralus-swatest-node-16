module.exports = async function (context, req) {
  const date = "2022-08-25T18:13:07.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

