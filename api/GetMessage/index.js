module.exports = async function (context, req) {
  const date = "2023-04-23T08:10:37.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

