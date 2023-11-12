module.exports = async function (context, req) {
  const date = "2023-11-12T09:07:56.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

