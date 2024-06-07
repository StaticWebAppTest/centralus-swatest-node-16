module.exports = async function (context, req) {
  const date = "2024-06-07T07:09:42.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

