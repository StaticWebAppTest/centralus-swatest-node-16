module.exports = async function (context, req) {
  const date = "2023-06-18T14:07:31.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

