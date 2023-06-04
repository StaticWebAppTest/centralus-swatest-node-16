module.exports = async function (context, req) {
  const date = "2023-06-04T11:06:42.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

