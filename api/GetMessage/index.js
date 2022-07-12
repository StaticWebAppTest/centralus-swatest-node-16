module.exports = async function (context, req) {
  const date = "2022-07-12T14:14:21.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

