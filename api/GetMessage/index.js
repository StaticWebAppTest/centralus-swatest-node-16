module.exports = async function (context, req) {
  const date = "2023-03-23T15:10:18.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

