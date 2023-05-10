module.exports = async function (context, req) {
  const date = "2023-05-10T08:11:24.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

