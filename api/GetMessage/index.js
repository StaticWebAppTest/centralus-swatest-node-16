module.exports = async function (context, req) {
  const date = "2024-11-20T05:12:10.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

