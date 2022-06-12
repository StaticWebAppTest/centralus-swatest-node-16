module.exports = async function (context, req) {
  const date = "2022-06-12T05:09:02.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

