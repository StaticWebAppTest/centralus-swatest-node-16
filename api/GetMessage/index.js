module.exports = async function (context, req) {
  const date = "2022-07-23T07:09:58.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

