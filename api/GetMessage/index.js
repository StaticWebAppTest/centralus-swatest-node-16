module.exports = async function (context, req) {
  const date = "2023-06-28T15:10:06.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

