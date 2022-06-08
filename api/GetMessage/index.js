module.exports = async function (context, req) {
  const date = "2022-06-08T21:09:18.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

