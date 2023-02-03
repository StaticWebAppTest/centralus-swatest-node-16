module.exports = async function (context, req) {
  const date = "2023-02-03T09:09:45.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

