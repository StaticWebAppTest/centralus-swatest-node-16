module.exports = async function (context, req) {
  const date = "2022-11-28T07:09:51.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

