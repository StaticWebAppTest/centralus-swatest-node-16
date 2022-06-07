module.exports = async function (context, req) {
  const date = "2022-06-07T14:10:01.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

