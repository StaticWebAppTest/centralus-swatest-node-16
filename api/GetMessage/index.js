module.exports = async function (context, req) {
  const date = "2023-05-08T14:08:30.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

