module.exports = async function (context, req) {
  const date = "2024-01-17T07:09:23.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

