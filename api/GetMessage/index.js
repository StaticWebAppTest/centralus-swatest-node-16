module.exports = async function (context, req) {
  const date = "2023-06-17T14:07:13.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

