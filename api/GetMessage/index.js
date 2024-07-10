module.exports = async function (context, req) {
  const date = "2024-07-10T05:10:31.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

