module.exports = async function (context, req) {
  const date = "2023-06-12T05:09:12.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

