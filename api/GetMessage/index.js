module.exports = async function (context, req) {
  const date = "2024-02-28T05:09:37.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

