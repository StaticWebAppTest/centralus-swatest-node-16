module.exports = async function (context, req) {
  const date = "2022-11-17T14:10:12.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

