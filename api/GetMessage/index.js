module.exports = async function (context, req) {
  const date = "2022-04-13T16:14:45.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

