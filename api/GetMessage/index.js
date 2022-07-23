module.exports = async function (context, req) {
  const date = "2022-07-23T09:10:28.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

