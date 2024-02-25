module.exports = async function (context, req) {
  const date = "2024-02-25T05:09:01.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

