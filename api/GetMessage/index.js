module.exports = async function (context, req) {
  const date = "2023-06-25T09:09:18.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

