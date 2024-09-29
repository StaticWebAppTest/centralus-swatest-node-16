module.exports = async function (context, req) {
  const date = "2024-09-29T14:09:39.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

