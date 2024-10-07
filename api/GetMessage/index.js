module.exports = async function (context, req) {
  const date = "2024-10-07T16:14:04.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

