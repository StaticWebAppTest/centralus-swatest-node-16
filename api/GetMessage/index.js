module.exports = async function (context, req) {
  const date = "2022-10-28T09:13:55.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

