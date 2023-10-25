module.exports = async function (context, req) {
  const date = "2023-10-25T14:08:38.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

