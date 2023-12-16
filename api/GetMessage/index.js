module.exports = async function (context, req) {
  const date = "2023-12-16T14:08:40.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

