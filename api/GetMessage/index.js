module.exports = async function (context, req) {
  const date = "2022-04-23T14:09:55.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

