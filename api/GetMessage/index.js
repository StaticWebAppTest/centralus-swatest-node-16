module.exports = async function (context, req) {
  const date = "2024-06-30T07:09:57.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

