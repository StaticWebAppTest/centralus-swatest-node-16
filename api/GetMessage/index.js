module.exports = async function (context, req) {
  const date = "2022-05-14T08:13:37.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

