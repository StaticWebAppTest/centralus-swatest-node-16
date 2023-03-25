module.exports = async function (context, req) {
  const date = "2023-03-25T09:08:14.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

