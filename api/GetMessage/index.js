module.exports = async function (context, req) {
  const date = "2022-06-13T07:10:21.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

