module.exports = async function (context, req) {
  const date = "2023-05-23T14:09:07.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

