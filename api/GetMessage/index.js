module.exports = async function (context, req) {
  const date = "2024-10-27T16:13:23.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

