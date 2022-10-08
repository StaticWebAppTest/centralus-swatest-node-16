module.exports = async function (context, req) {
  const date = "2022-10-08T22:12:19.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

