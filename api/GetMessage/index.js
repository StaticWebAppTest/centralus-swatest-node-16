module.exports = async function (context, req) {
  const date = "2022-03-15T05:09:53.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

