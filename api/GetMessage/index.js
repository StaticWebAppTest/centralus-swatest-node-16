module.exports = async function (context, req) {
  const date = "2022-03-25T14:09:15.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

