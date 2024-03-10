module.exports = async function (context, req) {
  const date = "2024-03-10T08:11:14.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

