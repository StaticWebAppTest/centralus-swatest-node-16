module.exports = async function (context, req) {
  const date = "2022-03-08T05:09:12.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

