module.exports = async function (context, req) {
  const date = "2023-10-12T03:09:12.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

