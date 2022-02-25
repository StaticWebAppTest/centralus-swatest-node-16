module.exports = async function (context, req) {
  const date = "2022-02-25T07:09:29.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

