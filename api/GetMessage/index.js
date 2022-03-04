module.exports = async function (context, req) {
  const date = "2022-03-04T03:13:08.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

