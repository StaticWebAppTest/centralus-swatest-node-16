module.exports = async function (context, req) {
  const date = "2024-09-10T07:13:02.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

