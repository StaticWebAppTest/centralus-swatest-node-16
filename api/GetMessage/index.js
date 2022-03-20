module.exports = async function (context, req) {
  const date = "2022-03-20T14:09:25.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

