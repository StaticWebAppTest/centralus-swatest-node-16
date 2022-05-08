module.exports = async function (context, req) {
  const date = "2022-05-08T14:09:58.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

