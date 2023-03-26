module.exports = async function (context, req) {
  const date = "2023-03-26T08:10:57.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

