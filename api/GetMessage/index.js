module.exports = async function (context, req) {
  const date = "2023-12-10T16:10:35.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

