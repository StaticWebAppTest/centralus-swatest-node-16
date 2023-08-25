module.exports = async function (context, req) {
  const date = "2023-08-25T03:09:10.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

