module.exports = async function (context, req) {
  const date = "2023-05-24T04:10:42.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

