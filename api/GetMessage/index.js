module.exports = async function (context, req) {
  const date = "2023-09-10T05:07:37.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

